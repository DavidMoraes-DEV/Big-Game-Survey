package com.biggamesurvey.services;

import java.util.List;
import java.util.stream.Collectors;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.biggamesurvey.DTO.GameDTO;
import com.biggamesurvey.entities.Game;
import com.biggamesurvey.repositories.GameRepository;

@Service
public class GameService {

	@Autowired
	private GameRepository repository;

	@Transactional(readOnly = true)
	public List<GameDTO> findAll() {
		List<Game> list = repository.findAll();
		return list.stream().map(game -> new GameDTO(game)).collect(Collectors.toList());
	}
}
