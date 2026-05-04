package com.proyecto.backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.proyecto.backend.DTO.CertificadoDTO;
import com.proyecto.backend.mapper.CertificadoMapper;
import com.proyecto.backend.model.certificado;
import com.proyecto.backend.repository.certificadoRepository;

@Service
public class CertificadoService {
    private final certificadoRepository certificadoRepository;
    private final CertificadoMapper certificadoMapper;

    public CertificadoService(certificadoRepository certificadoRepository, CertificadoMapper certificadoMapper) {
        this.certificadoRepository = certificadoRepository;
        this.certificadoMapper = certificadoMapper;
    }

    public List<CertificadoDTO> getAllCertificados() {
        return certificadoRepository.findAll().stream()
                .map(certificadoMapper::toDTO)
                .collect(Collectors.toList());
    }

    public CertificadoDTO createCertificado(CertificadoDTO certificadoDTO) {
        certificado certificado = certificadoMapper.toEntity(certificadoDTO);
        certificado savedCertificado = certificadoRepository.save(certificado);
        return certificadoMapper.toDTO(savedCertificado);
    }

    public long countCertificados() {
        return certificadoRepository.count();
    }

    public void deleteCertificado(Long id) {
        certificadoRepository.deleteById(id);
    }
}
