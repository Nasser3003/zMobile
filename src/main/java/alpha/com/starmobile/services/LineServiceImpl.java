package alpha.com.starmobile.services;

import java.util.List;
import java.util.Optional;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import alpha.com.starmobile.models.Line;
import alpha.com.starmobile.repository.LineRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class LineServiceImpl implements LineService {


    private LineRepository repo;

    @Override
    public List<Line> findAll() {
        return repo.findAll();
    }

    @Override
    public Optional<Line> findById(long id) {

        return repo.findById(id);
    }

    @Override
    public Optional<Line> findByNumber(String number) {
        return repo.findByNumber(number);
    }

    @Override
    public Line save(Line line) {
        if (line == null) {
            throw new IllegalArgumentException("Line must not be null");
        }
        return repo.save(line);
    }

    @Override
    public void deleteById(long id) {
        repo.deleteById(id);
    }

}
