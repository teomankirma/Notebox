namespace Notebox.Models
{
    public class Note
    {
        public string UserId { get; set; }
        public int Id { get; set; }
        public string NoteTitle { get; set; }
        public string NoteContent { get; set; }

        public Note()
        {

        }
    }
}
