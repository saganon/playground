import org.example.MarsRover
import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

class MarsRoverTest {
    @Test
    fun testName() {
        val marsRover = MarsRover().execution()
        assertEquals("Hello, Nanami!", marsRover)
    }
}