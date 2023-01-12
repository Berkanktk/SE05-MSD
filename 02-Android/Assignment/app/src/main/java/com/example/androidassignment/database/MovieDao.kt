package com.example.androidassignment.database

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.Query

@Dao
interface MovieDao {
    @Query("SELECT * FROM Movie")
    fun getAll(): List<Movie>

    @Query("SELECT * FROM Movie WHERE :movieID = movieID")
    fun loadByID(movieID: Int): Movie

    @Insert
    fun insert(movieID: Movie)

    @Delete
    fun delete(movieID: Movie)

    @Query("DELETE FROM Movie")
    fun deleteAll()
}
