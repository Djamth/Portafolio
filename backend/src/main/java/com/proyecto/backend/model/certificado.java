package com.proyecto.backend.model;
import java.lang.annotation.Inherited;

import javax.annotation.processing.Generated;

import lombok.*;
@table(name="certificado")
@Entity
@data
public class certificado {
    @Id 
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id ;
    private String nombre;
    private String descripcion;
    private String fecha;
    private String url ;

    

   
}