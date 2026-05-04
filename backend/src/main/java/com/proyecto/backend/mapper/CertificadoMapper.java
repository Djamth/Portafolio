package com.proyecto.backend.mapper;

import org.springframework.stereotype.Component;

import com.proyecto.backend.DTO.CertificadoDTO;
import com.proyecto.backend.model.certificado;

@Component
public class CertificadoMapper {
    public CertificadoDTO toDTO(certificado certificado) {
        CertificadoDTO dto = new CertificadoDTO();
        dto.setId(certificado.getId());
        dto.setNombre(certificado.getNombre());
        dto.setInstitucion(certificado.getInstitucion());
        dto.setDescripcion(certificado.getDescripcion());
        dto.setFecha(certificado.getFecha());
        dto.setUrl(certificado.getUrl());
        return dto;
    }

    public certificado toEntity(CertificadoDTO dto) {
        certificado certificado = new certificado();
        certificado.setId(dto.getId());
        certificado.setNombre(dto.getNombre());
        certificado.setInstitucion(dto.getInstitucion());
        certificado.setDescripcion(dto.getDescripcion());
        certificado.setFecha(dto.getFecha());
        certificado.setUrl(dto.getUrl());
        return certificado;
    }
}
