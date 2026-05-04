package com.proyecto.backend.controller;

import com.proyecto.backend.DTO.CertificadoDTO;
import com.proyecto.backend.DTO.proyectoDTO;
import com.proyecto.backend.service.CertificadoService;
import com.proyecto.backend.service.proyectoService;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api") 
public class ProyectoController {
    private final proyectoService proyectoService;
    private final CertificadoService certificadoService;

    public ProyectoController(proyectoService proyectoService, CertificadoService certificadoService) {
        this.proyectoService = proyectoService;
        this.certificadoService = certificadoService;
    }

    @GetMapping("/proyectos")
    public List<proyectoDTO> getAllProyectos() {
        return proyectoService.getAllProyectos();
    }
    @PostMapping("/proyectos")
    public proyectoDTO createProyecto(@RequestBody proyectoDTO proyectoDTO) {
        return proyectoService.createProyecto(proyectoDTO);
    }
    @GetMapping("/proyectos/count")
    public long countProyectos() {
        return proyectoService.countProyectos();
    }
    @DeleteMapping("/proyectos/{id}")
    public void deleteProyecto(@PathVariable Long id) {
        proyectoService.deleteProyecto(id);
    }


}
