package com.biggamesurvey.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.biggamesurvey.DTO.RecordDTO;
import com.biggamesurvey.DTO.RecordInsertDTO;
import com.biggamesurvey.entities.Game;
import com.biggamesurvey.entities.Record;
import com.biggamesurvey.repositories.GameRepository;
import com.biggamesurvey.repositories.RecordRepository;

@Service
public class RecordService {

	@Autowired
	private RecordRepository repository;

	@Autowired
	private GameRepository gameRepository;

	@Transactional(readOnly = true)
	public Page<RecordDTO> findByMoments(Instant minDate, Instant maxDate, PageRequest pageRequest) {
		return repository.findByMoments(minDate, maxDate, pageRequest).map(record -> new RecordDTO(record));
	}

	@Transactional
	public RecordDTO insert(RecordInsertDTO dto) {
		Record entity = new Record();
		copyDtoToEntity(dto, entity);

		entity = repository.save(entity);

		return new RecordDTO(entity);
	}

	public void copyDtoToEntity(RecordInsertDTO dto, Record entity) {
		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());

		Game game = gameRepository.getReferenceById(dto.getGameId());
		entity.setGame(game);

	}

}
