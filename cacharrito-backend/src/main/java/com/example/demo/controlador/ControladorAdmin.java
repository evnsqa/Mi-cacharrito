package com.example.demo.controlador;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.modelo.Administrador;
import com.example.demo.repositorio.administrador;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:4200")
public class ControladorAdmin {
	
	@Autowired
    private administrador adminRepository;
	
	@PostMapping("/login")
	public ResponseEntity<?> loginAdmin(@RequestParam String usuarioAdmin, @RequestParam String passwordAdmin) {
        Optional<Administrador> admin = adminRepository.findByUsuarioAdmin(usuarioAdmin);
        
        if (admin.isPresent() && admin.get().getPasswordAdmin().equals(passwordAdmin)) {
            return new ResponseEntity<>(admin.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Credenciales incorrectas", HttpStatus.UNAUTHORIZED);
        }
    }
}