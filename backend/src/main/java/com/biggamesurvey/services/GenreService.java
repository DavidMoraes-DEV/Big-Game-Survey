package com.biggamesurvey.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.biggamesurvey.DTO.GenreDTO;
import com.biggamesurvey.entities.Genre;
import com.biggamesurvey.repositories.GenreRepository;

@Service
public class GenreService {

	@Autowired
	private GenreRepository repository;

	@GetMapping
	public List<GenreDTO> findAll() {
		List<Genre> list = repository.findAll();
		List<GenreDTO> dto = list.stream().map(genre -> new GenreDTO(genre, genre.getGames())).collect(Collectors.toList());
		
		return dto;
	}
}
