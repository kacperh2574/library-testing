import org.junit.jupiter.api.Test;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.*;

class HelloWorldTest {

    @Test
    void hello() throws IOException {
        //String imie = "Kacper";
        var url = new URL("http://127.0.0.1:5000/person");
        var urlConnection = url.openConnection();
        try (var in = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()))) {

            var n = in.readLine();
            var len = n.indexOf("\"name\"");
            System.out.println(n);

            char[] arr = new char[16];
            Arrays.fill(arr, ' ');

            for (int i = 0; i < 16; i++)
                if (n.charAt(len + 8) != '"') {
                    arr[i] = n.charAt(len + 8);
                    len++;
                } else i = 16;

            String str = new String(arr);
            str = str.replaceAll("\\s+","");
            str = str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase();
            System.out.println(str);

            assertEquals("Hello World", new HelloWorld().hello("World"));
        }
    }
}
