package com.example.androidassignment

import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.RecyclerView
import androidx.recyclerview.widget.StaggeredGridLayoutManager
import com.example.androidassignment.database.Movie
import com.example.androidassignment.database.MovieDatabase

class MainActivity : AppCompatActivity() {
    lateinit var db : MovieDatabase
    private lateinit var adapter: MovieAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        Thread {
            // Getting the database
            db = MovieDatabase.getAppDatabase(this)!!

            // Removing contents if not empty
            if (db.movieDao().getAll().isNotEmpty()) {
                db.movieDao().deleteAll()
            }

            // Populating database
            if (db.movieDao().getAll().isEmpty()) {
                Log.i("Database", "Database Populated")
                val movie1 = Movie(
                    1,
                    "Interstellar",
                    "2014",
                    8.6f,
                    "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
                    "gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
                    "vgnoBSVzWAV9sNQUORaDGvDp7wx.jpg"
                )
                val movie2 = Movie(
                    2,
                    "The Matrix",
                    "1999",
                    8.7f,
                    "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
                    "f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
                    "l4QHerTSbMI7qgvasqxP36pqjN6.jpg"
                )
                val movie3 = Movie(
                    3,
                    "Inception",
                    "2010",
                    8.8f,
                    "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
                    "8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
                    "s3TBrRGB1iav7gFOCNx3H31MoES.jpg"
                )
                val movie4 = Movie(
                    4,
                    "Tenet",
                    "2020",
                    7.3f,
                    "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
                    "ApP2sz8pMkPC5xRlFa3l6MjQINB.jpg",
                    "yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg"
                )

                val movie5 = Movie(
                    5,
                    "The Godfather",
                    "1972",
                    9.2f,
                    "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
                    "g6ejKl5nIxLOTTzgXEqds16RkBv.jpg",
                    "rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg"
                )
                val movie6 = Movie(
                    6,
                    "Fall",
                    "2022",
                    6.4f,
                    "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
                    "spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
                    "1DBDwevWS8OhiT3wqqlW7KGPd6m.jpg"
                )
                val movie7 = Movie(
                    7,
                    "Gladiator",
                    "2000",
                    8.5f,
                    "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos. Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor. As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed. He escapes, but is captured by slave traders. Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.",
                    "ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
                    "hND7xAaxxBgaIspp9iMsaEXOSTz.jpg"
                )
                val movie8 = Movie(
                    8,
                    "Wall-E",
                    "2008",
                    8.4f,
                    "WALL·E is the last robot left on an Earth that has been overrun with garbage and all humans have fled to outer space. For 700 years he has continued to try and clean up the mess, but has developed some rather interesting human-like qualities. When a ship arrives with a sleek new type of robot, WALL·E thinks he's finally found a friend and stows away on the ship when it leaves.",
                    "kkzbUCLaZE4J819VClxESvGbuaX.jpg",
                    "qxSArjpoHUOIzP5ha3EHvWbPCdY.jpg"
                )

                val movie9 = Movie(
                    9,
                    "Joker",
                    "2019",
                    8.3f,
                    "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
                    "udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
                    "hO7KbdvGOtDdeg0W4Y5nKEHeDDh.jpg"
                )
                val movie10 = Movie(
                    10,
                    "Coco",
                    "2017",
                    8.4f,
                    "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
                    "oPeRtLwNW2nPImogItEdFGmldXZ.jpg",
                    "askg3SMvhqEl4OL52YuvdtY40Yb.jpg"
                )
                val movie11 = Movie(
                    11,
                    "Scarface",
                    "1983",
                    8.2f,
                    "After getting a green card in exchange for assassinating a Cuban government official, Tony Montana stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.",
                    "iQ5ztdjvteGeboxtmRdXEChJOHh.jpg",
                    "sctvs9cUwJD15qlTlrsh2BXsK75.jpg"
                )
                val movie12 = Movie(
                    12,
                    "Jurassic Park",
                    "1993",
                    8.1f,
                    "A wealthy entrepreneur secretly creates a theme park featuring living dinosaurs drawn from prehistoric DNA. Before opening day, he invites a team of experts and his two eager grandchildren to experience the park and help calm anxious investors. However, the park is anything but amusing as the security systems go off-line and the dinosaurs escape.",
                    "oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
                    "8gdIKyQ587Gdo4XCc99usA1eyA7.jpg"
                )

                // Inserting data into db
                db.movieDao().insert(movie1)
                db.movieDao().insert(movie2)
                db.movieDao().insert(movie3)
                db.movieDao().insert(movie4)
                db.movieDao().insert(movie5)
                db.movieDao().insert(movie6)
                db.movieDao().insert(movie7)
                db.movieDao().insert(movie8)
                db.movieDao().insert(movie9)
                db.movieDao().insert(movie10)
                db.movieDao().insert(movie11)
                db.movieDao().insert(movie12)
            }

            // Fetch data from DB
            adapter = MovieAdapter(db.movieDao().getAll(), this)

            runOnUiThread {
                // Recyclerview
                val recyclerView: RecyclerView = findViewById(R.id.movieView)
                val layoutManager = StaggeredGridLayoutManager(2, StaggeredGridLayoutManager.VERTICAL)
                recyclerView.setHasFixedSize(true)
                recyclerView.layoutManager = layoutManager
                recyclerView.adapter = adapter
            }
        }.start()
    }
}
