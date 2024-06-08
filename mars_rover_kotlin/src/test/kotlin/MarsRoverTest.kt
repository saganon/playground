import com.sun.tools.javac.Main
import org.example.main
import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

class MarsRoverTest {
    @Test
    fun testName() {
        assertEquals("Hello, Shanon!", main())
    }
}