package com.proyecto.backend.mapper;
import com.proyecto.backend.DTO.proyectoDTO;
import com.proyecto.backend.model.proyecto;

public class proyectoMapper {
    private proyectoRepository proyectoRepository;
    private proyectoDTO proyectoMapper;

    public proyectoMapper() {
    }

    //mapeador para convertir entre proyecto y proyectoDTO
    public static proyectoDTO toDTO(proyecto proyecto) {
        proyectoDTO dto = new proyectoDTO();
        dto.setNombre(proyecto.getNombre());
        dto.setDescripcion(proyecto.getDescripcion());
        dto.setUrl(proyecto.getUrl());
        dto.setImagen(proyecto.getImagen());
        dto.setTecnologiasutilizadas(proyecto.getTecnologiasutilizadas());
        return dto;
    }
        public static proyecto toEntity(proyectoDTO dto) {
            proyecto proyecto = new proyecto();
            proyecto.setNombre(dto.getNombre());
            proyecto.setDescripcion(dto.getDescripcion());
            proyecto.setUrl(dto.getUrl());
            proyecto.setImagen(dto.getImagen());
            proyecto.setTecnologiasutilizadas(dto.getTecnologiasutilizadas());
            return proyecto;
        }
    
}
