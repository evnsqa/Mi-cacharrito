package com.example.demo.repositorio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.modelo.Vehiculos;

public interface Vehiculo  extends JpaRepository<Vehiculos, String> {
	
	public List<Vehiculos> findByNombre (String nombre);
	
	public List<Vehiculos> findByPrecio (Double precio);
	
	public List<Vehiculos> findByEstado (String estado);
}
