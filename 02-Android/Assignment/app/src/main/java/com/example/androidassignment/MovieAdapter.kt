package com.example.androidassignment

import android.annotation.SuppressLint
import android.content.Context
import android.content.Intent
import android.graphics.BitmapFactory
import android.os.Handler
import android.os.Looper
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.androidassignment.database.Movie
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import java.net.URL

class MovieAdapter (private val movie : List<Movie>, private val context: Context) : RecyclerView.Adapter<MovieAdapter.ViewHolder>(){

    inner class ViewHolder(item : View): RecyclerView.ViewHolder(item){
        val movieName: TextView = item.findViewById(R.id.movieName)
        val movieRelease: TextView = item.findViewById(R.id.movieRelease)
        val movieRating: TextView = item.findViewById(R.id.movieRating)
        val movieDetails: Button = item.findViewById(R.id.movieDetails)
        val moviePoster: ImageView = item.findViewById(R.id.moviePoster)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.movie_view_holder, parent, false)
        return ViewHolder(view)
    }

    @SuppressLint("SetTextI18n")
    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.movieName.text = movie[position].movieName
        holder.movieRelease.text = movie[position].movieYear
        holder.movieRating.text = "Rating: " + movie[position].movieRating.toString()
        holder.movieDetails.setOnClickListener{
            val intent = Intent(context, MovieDetailActivity::class.java).apply {
                putExtra("movie", movie[position])
            }
            context.startActivity(intent)
        }

        val looper = Looper.getMainLooper()
        GlobalScope.launch {
            val url = URL("https://image.tmdb.org/t/p/w300/${movie[position].moviePoster}")
            val bmp = BitmapFactory.decodeStream(url.openConnection().getInputStream())

            Handler(looper).post{
                holder.moviePoster.setImageBitmap(bmp)
            }
        }
    }

    override fun getItemCount(): Int {
        return movie.size
    }
}