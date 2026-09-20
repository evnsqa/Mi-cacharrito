package com.example.demo.modelo;
import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "Usuario")
public class Usuario {

		@Id
		@Column (name ="identificacion_usuario")
		private Long idUsuario;
		
		@Column (name = "nombre_completo", length = 100, nullable = false)
		private String nombreCompleto;
		
		@Column (name = "fecha_expedicion_licencia")
		private Date fechaExpedicionLicencia;
		
		@Column (name = "categoria_licencia")
		private String categoriaLicencia;
		
		@Column (name = "vigencia_licencia")
		private Date vigenciaLicencia;
		
		@Column (name = "correo_electronico", unique = true, nullable = false)
		private String correoElectronico;
		
		@Column (name = "telefono", length = 30)
		private String telefono;
		
		@Column (name = "password", nullable = false)
		private String password;

		public Usuario(Long idUsuario, String nombreCompleto, Date fechaExpedicionLicencia, String categoriaLicencia,
				Date vigenciaLicencia, String correoElectronico, String telefono, String password) {
			super();
			this.idUsuario = idUsuario;
			this.nombreCompleto = nombreCompleto;
			this.fechaExpedicionLicencia = fechaExpedicionLicencia;
			this.categoriaLicencia = categoriaLicencia;
			this.vigenciaLicencia = vigenciaLicencia;
			this.correoElectronico = correoElectronico;
			this.telefono = telefono;
			this.password = password;
		}

		public Usuario() {

		}

		public Long getIdUsuario() {
			return idUsuario;
		}

		public void setIdUsuario(Long idUsuario) {
			this.idUsuario = idUsuario;
		}

		public String getNombreCompleto() {
			return nombreCompleto;
		}

		public void setNombreCompleto(String nombreCompleto) {
			this.nombreCompleto = nombreCompleto;
		}

		public Date getFechaExpedicionLicencia() {
			return fechaExpedicionLicencia;
		}

		public void setFechaExpedicionLicencia(Date fechaExpedicionLicencia) {
			this.fechaExpedicionLicencia = fechaExpedicionLicencia;
		}

		public String getCategoriaLicencia() {
			return categoriaLicencia;
		}

		public void setCategoriaLicencia(String categoriaLicencia) {
			this.categoriaLicencia = categoriaLicencia;
		}

		public Date getVigenciaLicencia() {
			return vigenciaLicencia;
		}

		public void setVigenciaLicencia(Date vigenciaLicencia) {
			this.vigenciaLicencia = vigenciaLicencia;
		}

		public String getCorreoElectronico() {
			return correoElectronico;
		}

		public void setCorreoElectronico(String correoElectronico) {
			this.correoElectronico = correoElectronico;
		}

		public String getTelefono() {
			return telefono;
		}

		public void setTelefono(String telefono) {
			this.telefono = telefono;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}
		
				
}
