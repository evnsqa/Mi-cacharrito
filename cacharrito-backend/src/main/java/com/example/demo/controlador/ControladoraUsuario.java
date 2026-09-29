package com.example.demo.controlador;

import java.time.LocalDate; 
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.modelo.Alquiler;
import com.example.demo.modelo.Usuario;
import com.example.demo.repositorio.alquileres;
import com.example.demo.repositorio.usuario; 

@RestController
@RequestMapping("/api/usuarios") 
@CrossOrigin(origins = "http://localhost:4200")
public class ControladoraUsuario {

    @Autowired
    private usuario repoUsuario;
    
    @Autowired
    private alquileres repoAlquiler;


    @PostMapping("/registro") 
    public ResponseEntity<?> guardarUsuario(@RequestBody Usuario usuario) {
        if (usuario.getId() == null) {
            if (repoUsuario.existsByIdUsuario(usuario.getIdUsuario())) {
                return new ResponseEntity<>("El número de identificación ya está registrado", HttpStatus.BAD_REQUEST);
            }
            if (repoUsuario.existsByCorreoElectronico(usuario.getCorreoElectronico())) {
                return new ResponseEntity<>("El correo electrónico ya está registrado", HttpStatus.BAD_REQUEST);
            }
        } 
        Usuario usuarioGuardado = repoUsuario.save(usuario);
        return new ResponseEntity<>(usuarioGuardado, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUsuario(@RequestParam String identificacionUsuario, @RequestParam String password) {
        Optional<Usuario> usuario = repoUsuario.findByIdUsuario(identificacionUsuario);
        
        if (usuario.isPresent() && usuario.get().getPassword().equals(password)) {
            return new ResponseEntity<>(usuario.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Credenciales incorrectas", HttpStatus.UNAUTHORIZED);
        }
    }
  
    @GetMapping("/listarTodo")
    public List<Usuario> mostrarTodos() {
        return repoUsuario.findAll();
    }
    
    @GetMapping("/nombreCompleto")
    public List<Usuario> mostrarNombres(@RequestParam("nombre") String nombreCompleto) {
        return repoUsuario.findByNombreCompleto(nombreCompleto);
    }

    @GetMapping("/expedicionLicencia")
    public List<Usuario> expedicionLicencia(@RequestParam("fecha") LocalDate fechaExpedicionLicencia) {
        return repoUsuario.findByFechaExpedicionLicencia(fechaExpedicionLicencia);
    }

    @GetMapping("/categoriaLicencia")
    public List<Usuario> categoriaLicencia(@RequestParam("categoria") String categoriaLicencia) {
        return repoUsuario.findByCategoriaLicencia(categoriaLicencia);
    }
    
    
    @PostMapping("/eliminarUsuario/")
    public Optional<Usuario> eliminarUsuario(@RequestBody String idUsuario) {
        Usuario u = this.repoUsuario.findByIdUsuario(idUsuario).get();
        
        List<Alquiler> a = this.repoAlquiler.findByUsuario(u);
        for(int i=0 ; i<a.size() ;i++) {
            this.repoAlquiler.deleteById(a.get(i).getNumeroAlquiler()); 
        }
                this.repoUsuario.deleteById(u.getId());
        return Optional.empty();
    }
  
       
}