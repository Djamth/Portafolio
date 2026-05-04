package com.proyecto.backend.mapper;

import org.springframework.stereotype.Component;

import com.proyecto.backend.DTO.proyectoDTO;
import com.proyecto.backend.model.proyecto;

@Component
public class proyectoMapper {
    public proyectoDTO toDTO(proyecto proyecto) {
        proyectoDTO dto = new proyectoDTO();
        dto.setId(proyecto.getId());
        dto.setNombre(proyecto.getNombre());
        dto.setDescripcion(proyecto.getDescripcion());
        dto.setUrl(proyecto.getUrl());
        dto.setImagenes(proyecto.getImagenes());
        dto.setTecnologiasutilizadas(proyecto.getTecnologiasutilizadas());
        return dto;
    }

    public proyecto toEntity(proyectoDTO dto) {
        proyecto proyecto = new proyecto();
        proyecto.setId(dto.getId());
        proyecto.setNombre(dto.getNombre());
        proyecto.setDescripcion(dto.getDescripcion());
        proyecto.setUrl(dto.getUrl());
        proyecto.setImagenes(dto.getImagenes());
        proyecto.setTecnologiasutilizadas(dto.getTecnologiasutilizadas());
        return proyecto;
    }
}
