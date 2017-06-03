package demo

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.util.concurrent.atomic.AtomicLong

@Controller
class RouterController {

    val idGenerator = AtomicLong()

    @RequestMapping("/")
    fun home() = "index.html"

    @RequestMapping("/tos")
    fun tos() = "the_tos.html"

    @RequestMapping("/stopwatch")
    fun stopwatch() = "the_stopwatch.html"

    @RequestMapping("/greet")
    fun greet() = "greeting.html"

    @RequestMapping("/metronome")
    fun metronome() = "keepTime.html"

}