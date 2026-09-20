package com.example.demo.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table (name="Vehiculos")
public class Vehiculos {
	
	@Id
	@Column (name="placa", nullable=false)
	private String placa;

	@Column (name="color") 
	private String color;
	
	@Column (name="precio")
	private Double precio;

	@Column (name="estado")
	private String estado;
	
	@ManyToOne ()
	@JoinColumn (name = "id_tipo_vehiculo", referencedColumnName="id_tipo_vehiculo")
	private TipoVehiculo tipoVehiculo;
	

	public Vehiculos(String placa, String color, Double precio, String estado, TipoVehiculo tipoVehiculo) {
		super();
		this.placa = placa;
		this.color = color;
		this.precio = precio;
		this.estado = estado;
		this.tipoVehiculo = tipoVehiculo;
	}

	public Vehiculos() {
		super();
	}

	public String getPlaca() {
		return placa;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public TipoVehiculo getTipoVehiculo() {
		return tipoVehiculo;
	}

	public void setTipoVehiculo(TipoVehiculo tipoVehiculo) {
		this.tipoVehiculo = tipoVehiculo;
	}
	
	
	
}
