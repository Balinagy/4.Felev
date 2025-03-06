#include <stdlib.h>
#include <stdio.h>
#include <signal.h>
#include <sys/types.h>
#include <unistd.h>  //fork
#include <sys/wait.h> //waitpid
#include <sys/time.h>

void handler(int sig, siginfo_t *si, void *ucontext) {
    printf("Sent value: %i\n", si->si_value);
}

int main(){

  struct sigaction sa;
  sigemptyset(&sa.sa_mask);
  sa.sa_sigaction = handler;
  sa.sa_flags = SA_SIGINFO; /* Important. */

  sigaction(SIGUSR1, &sa, NULL);    

  pid_t child=fork();
  if (child>0)
  { 
    pause(); //waits till a signal arrive 
	printf("Signal arrived\n");
    int status;
    wait(&status);
    printf("Parent process ended\n");
  }
  else 
  {
    sleep(3);
	srand(time(NULL));
    union sigval sv;
    sv.sival_int = rand() % 100;

    sigqueue(getppid(), SIGUSR1, sv);
    printf("Child process ended\n");  
  }
  return 0;
}