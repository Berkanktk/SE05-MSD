package com.example.androidassignment.database

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase

@Database(entities = arrayOf(Movie::class), version = 4, exportSchema = false)
abstract class MovieDatabase : RoomDatabase(){
    abstract fun movieDao(): MovieDao

    companion object {
        private var INSTANCE: MovieDatabase? = null

        fun getAppDatabase(context: Context): MovieDatabase? {
            if (INSTANCE == null) {
                INSTANCE = Room.databaseBuilder(
                    context.applicationContext,
                    MovieDatabase::class.java,
                    "MovieDatabase"
                )
                    .fallbackToDestructiveMigration()
                    //.allowMainThreadQueries()
                    .build()
            }
            return INSTANCE
        }
    }
}