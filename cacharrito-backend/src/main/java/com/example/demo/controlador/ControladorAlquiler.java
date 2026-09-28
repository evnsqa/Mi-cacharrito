package com.example.demo.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.Alquiler;
import com.example.demo.repositorio.alquileres;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/alquileres/")
public class ControladorAlquiler {

	@Autowired
	private alquileres repositorioAlquiler;


	@PostMapping("/guardarAlquiler/")
	public ResponseEntity<Alquiler> guardar(@RequestBody Alquiler a) {
		a.setEstado("pendiente de entrega");
		repositorioAlquiler.save(a);
		return ResponseEntity.ok(a);
	}


	@PostMapping("/cancelarAlquiler/")
	public Integer cancelar(@RequestParam("id") Long id) {
		return this.repositorioAlquiler.cancelarAlquiler(id);
	}


	@GetMapping("/listarPendientes/")
	public List<Alquiler> pendientes() {
		return this.repositorioAlquiler.alquileresPendientes();
	}


	@PostMapping("/entregarVehiculo/")
	public Integer entregar(@RequestParam("placa") String placa) {
		return this.repositorioAlquiler.entregarVehiculo(placa);
	}


	@PostMapping("/devolverVehiculo/")
	public Integer devolver(@RequestParam("id") Long id, @RequestParam("valorExtra") Double valorExtra) {
		return this.repositorioAlquiler.devolverVehiculo(id, valorExtra);
	}
}