package accounts.repository;

import accounts.domain.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Repository
@Transactional
public
interface AccountRespository extends JpaRepository<Account, UUID> {
    List<Account> findByCustomerId(Long customerId);
}

