package com.example.demo.repositorio;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.modelo.TipoVehiculo;

@Repository
public interface tipoVehiculo extends JpaRepository<TipoVehiculo, Long> {
   
    @Query(value = "SELECT * FROM tipo_vehiculo WHERE nombre = :nombre", nativeQuery = true)
    public List<TipoVehiculo> findByNombre(@Param("nombre") String nombre);

    
    @Query(value = "SELECT * FROM tipo_vehiculo WHERE id_tipo_vehiculo = :id", nativeQuery = true)
    public TipoVehiculo buscarPorId(@Param("id") Long id);
}