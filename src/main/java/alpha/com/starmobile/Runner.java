package alpha.com.starmobile;

import alpha.com.starmobile.dto.RegistrationDTO;
import alpha.com.starmobile.services.MyService;
import alpha.com.starmobile.services.UserService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@NoArgsConstructor
@AllArgsConstructor(onConstructor = @__(@Autowired))
@Component
public class Runner implements CommandLineRunner {
    private UserService userService;
    private MyService myService;


    @Override
    public void run(String... args) {

//        RegistrationDTO registrationNasserDTO = new RegistrationDTO("Nasser", "Abdrabbo",
//                "abdo.abdo3003@gmail.com", "Abdo");
//        userService.register(registrationNasserDTO);
//        myService.addPlan("GALACTIC");
//        myService.addLine("GALACTIC",3472077039L);
//        myService.addDevice(3472077039L, "apple", "iphone se");


//        myService.removeDevice(3472077039L, "apple", "iphone se");
//        myService.removeLine("GALACTIC",3472077039L);
//        myService.removePlan("GALACTIC");


    }
}
