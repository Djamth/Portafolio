package com.proyecto.backend.controller;

import com.proyecto.backend.DTO.CertificadoDTO;
import com.proyecto.backend.service.CertificadoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api")
public class CertificadoController {
    private final CertificadoService certificadoService;
    public CertificadoController(CertificadoService certificadoService) {
        this.certificadoService = certificadoService;
    }
    @GetMapping("/certificados")
    public List<CertificadoDTO> getAllCertificados() {
        return certificadoService.getAllCertificados();
    }

    @PostMapping("/certificados")
    public CertificadoDTO createCertificado(@RequestBody CertificadoDTO certificadoDTO) {
        return certificadoService.createCertificado(certificadoDTO);
    }

    @GetMapping("/certificados/count")
    public long countCertificados() {
        return certificadoService.countCertificados();
    }

    @DeleteMapping("/certificados/{id}")
    public void deleteCertificado(@PathVariable Long id) {
        certificadoService.deleteCertificado(id);
    }
}
