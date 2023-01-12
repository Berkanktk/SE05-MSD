package com.example.androidassignment.database

import java.io.Serializable
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity
data class Movie (
    @PrimaryKey val movieID: Int,
    val movieName : String,
    val movieYear: String,
    val movieRating: Float,
    val movieDescription: String,
    val moviePoster: String,
    val movieBackdrop: String,
    ) : Serializable{
}