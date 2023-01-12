package com.example.androidassignment

import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.os.Bundle
import android.widget.ImageView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.example.androidassignment.database.Movie
import java.net.URL


class MovieDetailActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_movie_detail)

        val movie = intent.getSerializableExtra("movie") as Movie

        findViewById<TextView>(R.id.name).apply {
            text = movie.movieName
        }

        findViewById<TextView>(R.id.year).apply {
            text = movie.movieYear
        }

        findViewById<TextView>(R.id.description).apply {
            text = movie.movieDescription
        }

       findViewById<TextView>(R.id.rating).apply {
            text = movie.movieRating.toString()
        }

        val gfgThread = Thread {
            try {
                val url = URL("https://image.tmdb.org/t/p/w1280/${movie.movieBackdrop}")
                val bmp: Bitmap = BitmapFactory.decodeStream(url.openConnection().getInputStream())
                val myImage: ImageView = findViewById(R.id.movieBackdrop)
                myImage.setImageBitmap(bmp)
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
        gfgThread.start()

    }
}