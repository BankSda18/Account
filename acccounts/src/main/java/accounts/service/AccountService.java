package accounts.service;
import accounts.domain.Account;
import accounts.dto.AccountDto;
import accounts.mapper.AccountMapper;
import accounts.repository.AccountRespository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final AccountRespository accountRepository;
    private final AccountMapper accountMapper;

    public List<AccountDto> getCustomerAccounts(Long customerId) {
        List<Account> accounts = accountRepository.findByCustomerId(customerId);
        return accountMapper.mapToDtoList(accounts);
    }
}
