document.addEventListener('DOMContentLoaded', function() {
    const commentsList = document.getElementById('commentsList');
    const commentForm = document.getElementById('commentForm');
    const commentInput = document.getElementById('comment');

    // Ambil komentar dari localStorage
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    // Tampilkan setiap komentar dalam daftar
    function displayComments() {
        commentsList.innerHTML = ''; // Kosongkan daftar komentar
        comments.forEach((comment, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = comment;

            // Tambahkan tombol untuk menghapus komentar
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Hapus';
            deleteButton.addEventListener('click', function() {
                comments.splice(index, 1); // Hapus komentar dari array
                localStorage.setItem('comments', JSON.stringify(comments)); // Simpan perubahan
                displayComments(); // Perbarui tampilan komentar
            });

            listItem.appendChild(deleteButton);
            commentsList.appendChild(listItem);
        });
    }

    // Event listener untuk mengirim komentar
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah refresh halaman
        const newComment = commentInput.value.trim();
        if (newComment) {
            comments.push(newComment); // Tambahkan komentar baru ke array
            localStorage.setItem('comments', JSON.stringify(comments)); // Simpan ke localStorage
            commentInput.value = ''; // Kosongkan input
            displayComments(); // Perbarui tampilan komentar
        }
    });

    // Tampilkan komentar yang ada saat halaman dimuat
    displayComments();
});
