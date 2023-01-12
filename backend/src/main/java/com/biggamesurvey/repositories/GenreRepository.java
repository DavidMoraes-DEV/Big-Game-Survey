package com.biggamesurvey.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.biggamesurvey.entities.Genre;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long>{

}
