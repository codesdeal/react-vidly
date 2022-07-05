import React, { Component } from 'react';
import MoviesTable from './moviesTable';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import Like from './common/like';
import { getMovies } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService';
import { paginate } from '../utils/paginate';
import { filter } from 'lodash';
import _ from 'lodash';

class Movies extends Component {

  state = {
    movies:[],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: 'title', order: 'asc' }
  };

  componentDidMount() {
    const genres = [{ _id:'', name: 'All Genres'}, ...getGenres()]
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  }

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = path => {
    const sortColumn = {...this.state.sortColumn};
    if (sortColumn.path === path)
    sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
    else{
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.setState({ sortColumn })
  }

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };


  render() {
    const { length: count } = this.state.movies;
    const { 
      pageSize, 
      currentPage,
      sortColumn, 
      selectedGenre, 
      movies: allMovies 
    } = this.state;

    if (count === 0)
      return <p>There are no movies in the Database.</p>;

    const filtered = selectedGenre && selectedGenre._id
              ? allMovies.filter(m => m.genre._id === selectedGenre._id) 
              : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize)

    return (
      <div className='row'>
        <div className="col-3">
            <ListGroup 
              items={this.state.genres} 
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect} 
            />
        </div>
        <div className="col">
          <p> Showing { filtered.length } movies in the database.</p>

          <MoviesTable 
            movies={movies} 
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />

          <Pagination 
            itemsCount={filtered.length} 
            pageSize={pageSize} 
            currentPage={currentPage} 
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
        <p> Showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Like liked={movie.liked} onClick={() => this.handleLike(movie)} /></td>
                <td><button onClick={() => this.handleDelete(movie)} className='btn btn-danger btn-sm'>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
    );
  }
}

export default Movies;