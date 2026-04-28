package com.proyecto.backend.model;
import java.time.LocalDateTime; 
import java.util.List;
import jakarta.persistence.*;
import lombok.*;
@Data
@Entity
@Table(name = "proyecto")
//modelo de proyecto para el portafolio
public class proyecto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String descripcion;
    private String url;
    private String imagen;
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
