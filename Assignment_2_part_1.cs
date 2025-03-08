using System;


namespace ConsoleApp1
{
    class Assignment_2_part_1
    {
        class Logger
        {
            public virtual void Log(string message)
            {
                Console.WriteLine("Logging message: " + message);
            }
        }

        // Child class for Database logging
        class DatabaseLogger : Logger
        {
            public override void Log(string message)
            {
                Console.WriteLine("Log written to Database: " + message);
            }
        }

        // Child class for File logging
        class FileLogger : Logger
        {
            public override void Log(string message)
            {
                Console.WriteLine("Log written to File: " + message);
            }
        }

        // Child class for Cloud logging
        class CloudLogger : Logger
        {
            public override void Log(string message)
            {
                Console.WriteLine("Log written to Cloud: " + message);
            }
        }

        public static void main(string[] args)
        {

            Logger dbLogger = new DatabaseLogger();
            Logger fileLogger = new FileLogger();
            Logger cloudLogger = new CloudLogger();

            // Logging messages
            dbLogger.Log("Database log entry");
            fileLogger.Log("File log entry");
            cloudLogger.Log("Cloud log entry");
        }
    }
}
