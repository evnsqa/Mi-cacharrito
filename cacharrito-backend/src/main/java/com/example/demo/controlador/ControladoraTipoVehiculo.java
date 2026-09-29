package com.example.demo.controlador;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.TipoVehiculo;
import com.example.demo.modelo.Vehiculos;
import com.example.demo.repositorio.tipoVehiculo;

@RestController
@RequestMapping("/tipovehiculo/t/")
<<<<<<< HEAD
@CrossOrigin(origins = "http://localhost:4200")
=======
@CrossOrigin(origins="http://localhost:4200/")
>>>>>>> 9f216eb6b817b4cd8cf2f4de465e791d78c43bf7
public class ControladoraTipoVehiculo {

    @Autowired
    private tipoVehiculo repotipoVehiculo;

	@GetMapping("/listarTodo/")
	public List<TipoVehiculo> mostrarTodos(){
		return repotipoVehiculo.findAll();
	}

    @PostMapping("/buscarNom/")
    public List<TipoVehiculo> buscarNom(@RequestParam("nombre") String nombre) {
        return this.repotipoVehiculo.findByNombre(nombre);
    }

   
    @PostMapping("/buscarId/")
    public TipoVehiculo buscarId(@RequestParam("id") Long id) {
        return this.repotipoVehiculo.buscarPorId(id);
    }
    
    @PostMapping("/guardarTipoVehiculo/")
    public ResponseEntity<TipoVehiculo> guardar(@RequestBody TipoVehiculo t) {
        repotipoVehiculo.save(t);
        return ResponseEntity.ok(t);
    }
    
    @PostMapping("/modificarTipoVehiculo/")
    public ResponseEntity<TipoVehiculo> modificar(@RequestBody TipoVehiculo t) {
        repotipoVehiculo.save(t);
        return ResponseEntity.ok(t);
    }
    
    @PostMapping("/eliminarTipoVehiculo/")
    public Optional<TipoVehiculo> eliminarTipoVehiculo(@RequestBody Long id) {
        this.repotipoVehiculo.deleteById(id);
        return Optional.empty();
    }
}