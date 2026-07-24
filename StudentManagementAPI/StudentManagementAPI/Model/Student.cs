using System.ComponentModel.DataAnnotations;

namespace StudentManagementAPI.Model
{
    public class Student
    {
        [Key]
        public int StudentId { get; set; }

        public string StudentName { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public int Age { get; set; }

        public string Course { get; set; } = string.Empty;

        public DateTime CreatedDate { get; set; } = DateTime.Now;
    }
}
