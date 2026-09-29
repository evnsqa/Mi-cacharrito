package com.example.demo.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.demo.modelo.Alquiler;

import jakarta.transaction.Transactional;

import java.util.List;
import java.util.Optional;

public interface alquileres extends JpaRepository<Alquiler, Long>{

		@Query("SELECT a FROM Alquiler a WHERE a.estado = 'pendiente de entrega'")
		List<Alquiler> alquileresPendientes();

		@Modifying
		@Transactional
		@Query("UPDATE Alquiler a SET a.estado = 'cancelado' WHERE a.numeroAlquiler = :id")
		Integer cancelarAlquiler(@Param("id") Long id);

		@Modifying
		@Transactional
		@Query("UPDATE Alquiler a SET a.estado = 'entregado' WHERE a.vehiculos.placa = :placa AND a.estado = 'pendiente de entrega'")
		Integer entregarVehiculo(@Param("placa") String placa);

		@Modifying
		@Transactional
		@Query("UPDATE Alquiler a SET a.estado = 'disponible', a.valorTotal = a.valorTotal + :valorExtra WHERE a.numeroAlquiler = :id")
		Integer devolverVehiculo(@Param("id") Long id, @Param("valorExtra") Double valorExtra);
		
		public List<Alquiler> findByUsuario (Alquiler alquiler);
	}


