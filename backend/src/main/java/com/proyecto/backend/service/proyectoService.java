package com.proyecto.backend.service;
import com.proyecto.backend.DTO.proyectoDTO;
import com.proyecto.backend.model.proyecto;
import com.proyecto.backend.mapper.proyectoMapper;
import com.proyecto.backend.repository.ProyectoRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;
@Service
public class proyectoService {
    private final ProyectoRepository proyectoRepository;
    private final proyectoMapper proyectoMapper;

    public proyectoService(ProyectoRepository proyectoRepository, proyectoMapper proyectoMapper) {
        this.proyectoRepository = proyectoRepository;
        this.proyectoMapper = proyectoMapper;
    }
    public List<proyectoDTO> getAllProyectos() {
        List<proyecto> proyectos = proyectoRepository.findAll();
        return proyectos.stream()
                .map(proyectoMapper::toDTO)
                .collect(Collectors.toList());
    }
    public proyectoDTO createProyecto(proyectoDTO proyectoDTO) {
        proyecto proyecto = proyectoMapper.toEntity(proyectoDTO);
        proyecto savedProyecto = proyectoRepository.save(proyecto);
        return proyectoMapper.toDTO(savedProyecto);
    }
    public long countProyectos() {
        return proyectoRepository.count();
    }
    public void deleteProyecto(Long id) {
        proyectoRepository.deleteById(id);
    }
}
