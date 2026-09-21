package com.example.demo.repositorio;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.modelo.Usuario;

public interface usuario extends JpaRepository<Usuario,Long> {

    public List<Usuario> findByNombreCompleto(String nombreCompleto);

    public List<Usuario> findByFechaExpedicionLicencia(Date fechaExpedicionLicencia);

    public List<Usuario> findByCategoriaLicencia(String categoriaLicencia);

    public List<Usuario> findByVigenciaLicencia(Date vigenciaLicencia);

    public List<Usuario> findByCorreoElectronico(String correoElectronico);

    public List<Usuario> findByTelefono(String telefono);
	
}
