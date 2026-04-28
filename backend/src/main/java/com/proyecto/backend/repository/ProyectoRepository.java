package com.proyecto.backend.repository;
import com.proyecto.backend.model.proyecto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProyectoRepository extends JpaRepository<proyecto, Long> {
    //total de proyectos
    long count();

}
