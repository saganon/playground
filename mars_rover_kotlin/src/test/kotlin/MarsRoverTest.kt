import org.example.MarsRover
import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

class MarsRoverTest {
    private fun marsRover(movement: String) = MarsRover().execution(movement);

    @Test
    fun marsTest() {
        assertEquals("0:2:W", marsRover("FFR"))
        assertEquals("1:2:N", marsRover("FFRFL"))
        assertEquals("0:2:E", marsRover("FFRRR"))
        assertEquals("1:2:S", marsRover("FFRFR"))
    }
}