document.addEventListener( 'DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleAddFavoriteMusic);

  
    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllMusic);
});

const handleAddFavoriteMusic = function (event) {
    event.preventDefault();

    const musicListItem = createMusicListItem(event.target);
    const musicList = document.querySelector('#music-list');
    musicList.appendChild(musicListItem);

    event.target.reset();
};

const createMusicListItem =function(form) {
    const musicListItem = document.createElement('li');
    musicListItem.classList.add('music-list-item');

    const artist = document.createElement('h2');
    artist.textContent = form.artist.value;
    musicListItem.appendChild(artist);

    const song = document.createElement('h3');
    song.textContent = form.song.value;
    musicListItem.appendChild(song);

    const genre = document.createElement('p');
    genre.textContent = form.genre.value;
    musicListItem.appendChild(genre);

    return musicListItem;
}

const handleDeleteAllMusic = function() {
    const musicList = document.querySelector('#music-list');
    musicList.innerHTML = '';
};
