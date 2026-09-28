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
import com.example.demo.repositorio.Vehiculo;

@RestController
@RequestMapping("/vehiculo/v/")
@CrossOrigin(origins="http://localhost:4200/")
public class ControladoraVehiculo {
	
	@Autowired
	private Vehiculo repoVehiculo;
	
	
	@PostMapping("/buscarPlaca/")
	public Vehiculos buscarPlaca(@RequestParam("placa") String placa) {
		   return repoVehiculo.findById(placa).get();
	}
	
	
	@PostMapping("/buscarNom/")
	public List<Vehiculos> buscarNom(@RequestParam("nombre")String nombre) {
		   return this.repoVehiculo.findByNombre(nombre);
	}
	
	@PostMapping("/buscarPrecio/")
	public List<Vehiculos> buscarPrecio(@RequestParam("precio")Double precio) {
		   return this.repoVehiculo.findByPrecio(precio);
	}
	
	@PostMapping("/buscarEstado/")
	public List<Vehiculos> buscarEstado(@RequestParam("estado")String estado) {
		   return this.repoVehiculo.findByEstado(estado);
	}

	@GetMapping("/listarTodo/")
	public List<Vehiculos> mostrarTodos(){
		return repoVehiculo.findAll();
	}
	
	@PostMapping("/guardarVehiculo/")
	public ResponseEntity<Vehiculos> guardar(@RequestBody Vehiculos v) {
		repoVehiculo.save(v);
		return ResponseEntity.ok(v);
	}
	

	@PostMapping("/eliminarVehiculo/")
	public Optional<Vehiculos> eliminarVehiculo(@RequestBody String n) {
		Vehiculos v = this.repoVehiculo.findById(n).get();
//		List<TipoVehiculo> t = this.RepositorioT.findByVehiculo(v);
		
//		for(int i=0 ; i<t.size() ;i++) {
//			this.RepositorioT.deleteById(t.get(i).getIdTipoVehiculo());
//		}
		
		this.repoVehiculo.deleteById(n);
		return Optional.empty();
	}

	
}
