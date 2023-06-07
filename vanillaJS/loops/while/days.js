        //while loop 1-31
        var date = 0;

        while (date<31) {
            date++;
        //divide by 7 and convert to weekday (output 1-7) 
            var weekday = date%7;
                //switch case mein input
                switch (weekday) {
                    case 1:
                      document.write(`${date}: Monday`, "<br>");
                      break;
                    case 2:
                    document.write(`${date}: Tuesday`, "<br>");
                      break;
                    case 3:
                    document.write(`${date}: Wednesday`, "<br>");
                      break;
                    case 4:
                    document.write(`${date}: Thursday`, "<br>");
                      break;
                    case 5:
                    document.write(`${date}: Friday`, "<br>");
                      break;
                    case 6:
                    document.write(`${date}: Saturday`, "<br>");
                      break;
                    case 0:
                    document.write(`${date}: Sunday`, "<br>");
                      break;
                }
            }
