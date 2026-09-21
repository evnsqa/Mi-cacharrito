package com.example.demo.controlador;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.Usuario;
import com.example.demo.repositorio.usuario;

@RestController
@RequestMapping ("/usuario/u/")
public class ControladoraUsuario {

	@Autowired
	private usuario repoUsuario;
	
	@GetMapping("/listarTodo/")
	public List<Usuario> mostrarTodos() {
	return repoUsuario.findAll();
	}
	
	@GetMapping("nombreCompleto")
    public List<Usuario> mostrarNombres(@RequestParam("nombre") String nombreCompleto) {
        return repoUsuario.findByNombreCompleto(nombreCompleto);
    }

    @GetMapping("expedicionLicencia")
    public List<Usuario> expedicionLicencia(@RequestParam("fecha") Date fechaExpedicionLicencia) {
        return repoUsuario.findByFechaExpedicionLicencia(fechaExpedicionLicencia);
    }

    @GetMapping("categoriaLicencia")
    public List<Usuario> categoriaLicencia(@RequestParam("categoria") String categoriaLicencia) {
        return repoUsuario.findByCategoriaLicencia(categoriaLicencia);
    }
	
	
	}

