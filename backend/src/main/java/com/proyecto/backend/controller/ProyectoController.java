package com.proyecto.backend.controller;
import com.proyecto.backend.DTO.proyectoDTO;
import com.proyecto.backend.service.proyectoService;
import java.util.List;
@RestController

@RequestMapping("/api") 
public class ProyectoController {
    private proyectoService proyectoService;

    public ProyectoController(proyectoService proyectoService) {
        this.proyectoService = proyectoService;
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
