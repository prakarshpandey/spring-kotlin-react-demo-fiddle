package demo

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.util.concurrent.atomic.AtomicLong

@RestController
class GreetingController {

    val idGenerator = AtomicLong()

    @RequestMapping("/hello")
    fun hello(name: String): Greeting {
        val id = idGenerator.incrementAndGet()
        return Greeting(id, "My name is $name")
    }


}