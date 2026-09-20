package com.example.demo.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "Tipo_vehiculo")
public class TipoVehiculo {
    
    @Id
    @Column (name ="id_tipo_vehiculo")
    private Long idTipoVehiculo;
    
    @Column (name = "nombre", length = 100, nullable = false)
    private String nombre;

    public TipoVehiculo(Long idTipoVehiculo, String nombre) {
        super();
        this.idTipoVehiculo = idTipoVehiculo;
        this.nombre = nombre;
    }

    public TipoVehiculo() {
    }

    public Long getIdTipoVehiculo() {
        return idTipoVehiculo;
    }

    public void setIdTipoVehiculo(Long idTipoVehiculo) {
        this.idTipoVehiculo = idTipoVehiculo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    
    
}