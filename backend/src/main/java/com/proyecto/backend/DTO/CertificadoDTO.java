package com.proyecto.backend.DTO;

import lombok.Data;

@Data
public class CertificadoDTO {
    private Long id;
    private String nombre;
    private String institucion;
    private String descripcion;
    private String fecha;
    private String url;
}
