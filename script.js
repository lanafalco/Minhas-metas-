function createCountdown(id, finalDate){

      function updateCountdown(){

          const now = new Date().getTime();
              const distance = finalDate - now;

                  if(distance <= 0){
                        document.getElementById(id).innerHTML = "🎉 Objetivo alcançado!";
                              return;
                                  }

                                      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                                          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                              const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                                                  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                                                      document.getElementById(id).innerHTML = `
                                                            ${days} dias <br>
                                                                  ${hours} horas <br>
                                                                        ${minutes} minutos <br>
                                                                              ${seconds} segundos
                                                                                  `;
                                                                                    }

                                                                                      updateCountdown();
                                                                                        setInterval(updateCountdown, 1000);
                                                                                        }

                                                                                        createCountdown(
                                                                                          "timer1",
                                                                                            new Date("December 30, 2026 00:00:00").getTime()
                                                                                            );

                                                                                            createCountdown(
                                                                                              "timer2",
                                                                                                new Date("December 30, 2029 00:00:00").getTime()
                                                                                                );

                                                                                                createCountdown(
                                                                                                  "timer3",
                                                                                                    new Date("December 30, 2030 00:00:00").getTime()
                                                                                                    );

                                                                                                    createCountdown(
                                                                                                      "timer4",
                                                                                                        new Date("December 30, 2031 00:00:00").getTime()
                                                                                                        );
