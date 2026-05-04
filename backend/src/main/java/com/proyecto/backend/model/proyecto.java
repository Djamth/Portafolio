package com.proyecto.backend.model;

import java.time.LocalDateTime; 
import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name = "proyecto")
public class proyecto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String descripcion;
    private String url;

    @ElementCollection
    private List<String> imagenes;

    @ElementCollection
    private List<String> tecnologiasutilizadas;

    private LocalDateTime fechacreacion;
    private LocalDateTime fechaactualizacion;

    @PrePersist
    public void prePersist() {
        fechacreacion = LocalDateTime.now();
    }
    @PreUpdate
    public void preUpdate() {
        fechaactualizacion = LocalDateTime.now();
    }
    
}
